require 'haml'

get '/' do
  erb :index
end

post '/fizzytweet/post' do
  Twitter.update(params[:data])
  @user = TwitterUser.find_or_create_by_username("flizzardnation")
  @user.repopulate_tweets
  @tweets = @user.tweets
  haml :flizzy
end

get '/tweet/flizzyfridays' do
  @user = TwitterUser.find_or_create_by_username("flizzardnation")
  if @user.tweets_stale?
    @user.repopulate_tweets
  end
  @tweets = @user.tweets
  haml :flizzy
end

get '/:username' do |username|
  @user = TwitterUser.find_or_create_by_username(username)
  if @user.tweets_stale?
    @user.repopulate_tweets
  end
  @tweets = @user.tweets
  erb :tweets, layout: false
end
