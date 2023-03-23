class SessionController < ApplicationController
  skip_before_action :authorize, only: [:login]

   def login 
      user = User.find_by(username: params[:username] )
      if(user && user.authenticate(params[:password]))
        session[:user_id] = user.id
        render json: { status: :created, loggedin: true, user: user}

      else
        render json: {errors: ["Wrong username or password"]}, status: :unauthorized
      end
   end


   #logout
   def logout
      session.delete :user_id
      head :no_content
   end
end