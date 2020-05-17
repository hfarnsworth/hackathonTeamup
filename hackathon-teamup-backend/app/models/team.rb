class Team < ApplicationRecord
  has_many :collaborators, through: :team_members
end
