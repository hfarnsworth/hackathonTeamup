class Collaborator < ApplicationRecord
  has_many :team_members, dependent: :destroy
  has_many :teams, through: :team_members

  validates :name, presence: true
  validates :role, presence: true
  validates :skills, presence: true
end
