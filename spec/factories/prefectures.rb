FactoryBot.define do
# テストデータとして、「id:13の東京都」をcreateすることとする

factory :prefecture do
    id { 13 }
    name { '東京都' }

    initialize_with do
      Prefecture.find_or_initialize_by(
        id: 13,
        name: '東京都')
    end
  end
end
