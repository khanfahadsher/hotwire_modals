class CreatePersonals < ActiveRecord::Migration[7.0]
  def change
    create_table :personals do |t|
      t.string :first_name
      t.string :last_name
      t.string :nick_name
      t.string :email_address
      t.string :phone_number

      t.timestamps
    end
  end
end
