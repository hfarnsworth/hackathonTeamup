class Collaborator < ApplicationRecord
  has_many :teams, through: :team_members
end
