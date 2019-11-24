# freemarket_app_fk61a
フリマアプリ「メルカリ」のクローンサイト。

## Description
フリマアプリ「メルカリ」のクローンサイト。誰でも簡単に売り買いが楽しめるフリマアプリの機能を再現したページ。
ユーザー登録、商品出品、商品購入などの機能が再現されていますが、実際の取引はできません。

***DEMO:***


## Features

- haml/SASS記法と、命名規則BEMを使ったマークアップ
- SNS認証による新規登録、ログイン
- ajaxを使用した非同期処理
- capistranoによるAWS EC2への自動デプロイ
- ActiveStorageを使用しAWS S3への画像アップロード

## Requirement

- Ruby 2.5.1
- Rails 5.2.3

## Installation

    $ git clone https://github.com/kokkedx/freemarket_app_fk61a.git
    $ cd freemarket_app_fk61a
    $ bundle install


## Author

[@kokkedx]()
[@Orihata]()
[@yu-ta49]()

## License

[MIT](http://b4b4r07.mit-license.org)


## usersテーブル

| Column | Type | Options |
|------|----|-------|
| nickname | string |null: false, unique: true |
| email |string |null: false, unique: true |
| last_name |string |null: false |
| first_name | string |null: false |
| last_name_kana | string |null: false |
| first_name_kana |string |null: false |
| birthday |datetime |null: false |
| phone_number | string |null: false, unique: true|
| address_last_name |string |null: false |
| address_first_name | string |null: false |
| address_last_name_kana |string |null: false |
| address_last_first_kana |string |null: false |
| address_number | string |null: false|
| prefecture | references| |
| address_name |string |null: false |
| address_block | string |null: false |
| address_building |string ||
| address_phone_number |string ||
| introduce | text ||
| encrypted_password | string |null: false, default: ""|

### Association
- belongs_to :prefecture
- has_one :sns_credential, dependent: :destroy
- has_many :buyer_transactions, class_name: 'Transaction', foreign_key: 'buyer_id'
- has_many :seller_transactions, class_name: 'Transaction', foreign_key: 'seller_id'

## sns_credencialsテーブル

| Column | Type | Options |
|------|----|-------|
| provider | string ||
| uid | string ||
| user | references | foreign_key: true |

### Association
- belongs_to :user, optional: true 

## Categoriesテーブル

|Column|Type|Options|
|------|----|-------|
| name | string ||
| ancestry | string | |

### Association
- has_many :items
- has_ancestry

## itemsテーブル

|Column|Type|Options|
|------|----|-------|
| name | string | null: false |
| description | text | null: false |
| price | integer | null: false |
| size | string | null: false |
| category | reference | foreign_key: true |
| shipping | reference | foreign_key: true |
| state | reference | foreign_key: true |
| ship_cost | reference | foreign_key: true |
| ship_date | reference | foreign_key: true |
| ship_delivery | reference | foreign_key: true |
| prefecture | reference | foreign_key: true |
| user | reference | foreign_key: true |

### Association
- belongs_to :user
- belongs_to :category
- belongs_to :state
- belongs_to :prefecture
- belongs_to :ship_cost
- belongs_to :ship_date
- belongs_to :ship_delivery
- has_one :selling, class_name: 'Transaction', foreign_key: 'item_id'
- has_many_attached :images

## statesテーブル

|Column|Type|Options|
|------|----|-------|
| name | string | null: false |

### Association
- has_many :items

## prefecturesテーブル

|Column|Type|Options|
|------|----|-------|
| name | string ||

### Association
- has_many :users
- has_many :items

## transactionsテーブル

|Column|Type|Options|
|------|----|-------|
| item_id | integer ||
| buyer_id | integer ||
| seller_id | integer ||

### Association
- belongs_to :item
- belongs_to :buyer, class_name: 'User', foreign_key: 'buyer_id'
- belongs_to :seller, class_name: 'User', foreign_key: 'seller_id'

## ship_costsテーブル

|Column|Type|Options|
|------|----|-------|
| name | string ||

### Association
- has_many :items

## ship_datesテーブル

|Column|Type|Options|
|------|----|-------|
| name | string ||

### Association
- has_many :items

## ship_deliveriesテーブル

|Column|Type|Options|
|------|----|-------|
| name | string ||
| charge | integer ||

### Association
- has_many :items