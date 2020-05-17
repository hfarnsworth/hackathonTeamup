class CreateCollaborators < ActiveRecord::Migration[6.0]
  def change
    create_table :collaborators do |t|
      t.string :name
      t.string :role
      t.text :skills

      t.timestamps
    end
  end
end
