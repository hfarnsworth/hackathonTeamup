class Team < ApplicationRecord
  has_many :team_members
  has_many :collaborators, through: :team_members
end
