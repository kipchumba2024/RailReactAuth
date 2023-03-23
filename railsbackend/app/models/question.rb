class Question < ActiveRecord::Base
   belongs_to :user

   validates :title, presence: true
   validates :description, presence: true
end