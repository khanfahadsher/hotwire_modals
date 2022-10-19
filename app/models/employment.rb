class Employment < ApplicationRecord
    validates :employer, presence: true
    validates :date_started, presence: true
    validates :date_employment_ended, presence: true
end
