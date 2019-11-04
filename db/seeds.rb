require 'jp_prefecture'

# 都道府県リストを作る
47.times do |number|
  pref = JpPrefecture::Prefecture.find code: (number + 1)
  Prefecture.create(name: "#{pref.name}")
end