class AddTrainerToPokemons < ActiveRecord::Migration[8.1]
  def change
    add_reference :pokemons, :trainer, null: false, foreign_key: true
  end
end
