class Collaborator < ApplicationRecord
  has_many :team_members
  has_many :teams, through: :team_members

  validates :name, presence: true
  validates :role, presence: true
  validates :description, presence: true
end
