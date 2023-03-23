class User < ActiveRecord::Base
    has_many :questions
    has_secure_password

    validates :username, presence: true,length: { minimum: 4 },  uniqueness: true
    validates :email, presence: true,  uniqueness: true

 end