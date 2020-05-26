class Team < ApplicationRecord
  has_many :team_members
  has_many :collaborators, through: :team_members

  validates :name, presence: true
  validates :name, uniqueness: true
  validates :description, presence: true
end
