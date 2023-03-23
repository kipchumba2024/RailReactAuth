class UserController < ApplicationController
    skip_before_action :authorize, only: [:create]

   def index 
       users = User.all
       render json: users
   end

   def create 
        user = User.create(email: params[:email], username: params[:username], password: params[:password])
        if user.valid?
            render json: { "success": "User saved successfully!"}
        else
            render json: user.errors.messages
        end
   end

   def loggedin
     user = User.find_by(id: session[:user_id] ) 
     if(user)
        render json: {loggedin: true, user: user}
     else
        render json: {loggedin: false}
     end      
   end

end