FactoryBot.define do

  factory :user do
    nickname { Faker::Games::SuperSmashBros.fighter }
    email { Faker::Internet.email }
    password { Faker::Internet.password(min_length = 8, max_length = 16, mix_case = true, special_chars = false) }
    last_name { Gimei.last.kanji }
    first_name { Gimei.first.kanji }
    last_name_kana { Gimei.last.katakana }
    first_name_kana { Gimei.first.katakana }
    phone_number { 1234567890 }
    address_last_name { Gimei.last.kanji }
    address_first_name { Gimei.first.kanji }
    address_last_name_kana { Gimei.last.katakana }
    address_first_name_kana { Gimei.first.katakana }
    address_number { 1234567 }
    prefecture_id { 13 }
    address_name { Gimei.city.kanji }
    address_block { Gimei.town.kanji  }
    address_building { nil }
    address_phone_number { nil }
  end

end