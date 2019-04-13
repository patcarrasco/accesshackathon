class User < ApplicationRecord

  has_many :relationships
  has_many :followed_users, through: :relationships

  has_many :inverse_relationships, class_name: "Relationship", foreign_key: :followed_user_id
  has_many :inverse_followed_users, through: :inverse_relationships, source: :user


end
