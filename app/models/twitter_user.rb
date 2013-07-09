class TwitterUser < ActiveRecord::Base
  has_many :tweets

  after_create :fetch_tweets

  def fetch_tweets
    twitter_array = Twitter.user_timeline(self.username, count: 10)
    if twitter_array.empty?
      self.tweets << {content: "No Tweets!", created_at: Time.now}
    else 
      twitter_array.each do |tweet|
        self.tweets << Tweet.create(content: tweet.text)
      end
      return self.tweets
    end
  end

  def tweets_stale?
    if self.tweets.last
      created_at = self.tweets.last.created_at
      TimeDifference.between(created_at, Time.now).in_minutes >= 15.0
    end
  end

  def repopulate_tweets
    self.tweets.clear
    self.fetch_tweets
  end
end
