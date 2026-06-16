class Trainer < ApplicationRecord
    has_many :pokemons, dependent: :destroy
    validate :name_cannot_contain_numbers
    validates :name, presence: true

    private

    def name_cannot_contain_numbers
        errors.add(:name, "cannot contain numbers") if name.present? && name.match?(/\d/)
    end
end
