get '/' do
  erb :index
end

get '/flizzyfridays' do
  @user = TwitterUser.find_or_create_by_username("flizzardnation")
  if @user.tweets_stale?
    @user.repopulate_tweets
  end
  @tweets = @user.tweets
  erb :flizzy
end

get '/:username' do |username|
  @user = TwitterUser.find_or_create_by_username(username)
  if @user.tweets_stale?
    @user.repopulate_tweets
  end
  @tweets = @user.tweets
  erb :tweets, layout: false
end
