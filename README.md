# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

usersテーブル
| Column | Type | Options |
|------|----|-------|
| nickname | string |null: false
| password |string |null: false
| mailadress |text |null: false
| sns_credencial | references |

### Association
has_many :item
has_many :comment
has_many :message
has_many :review
has_one :profile
has_one :card
has_one :sns_credencial

sns_credencialテーブル
| Column | Type | Options |
|------|----|-------|
| user | reference |null: false, foreign_key: true
| u-id | string | null: false
| provider | string | null: false

### Association
belongs_to :users

Cardテーブル
| Column | Type | Options |
|------|----|-------|
| user| references |null: false, foreign_key: true
| card | string |null: false
### Association
belongs_to :users

Profileテーブル
| Column | Type | Options |
|------|----|-------|
| first name  | string | null: false
| last name | string | null: false
| first kana | string | null: false
| last kana | string | null: false
| phone number | integer | null: false
| Prefectures | string | null: false
| city | string | null: false
| address | string | null: false
| building | string | null: false
| user-id|references | null: false
### Association
belongs_to :users


itemsテーブル
|Column|Type|Options|
|------|----|-------|
| item name | string | null: false
| description | text | null: false
| price | integer | null: false
| size | string | null: false
| brand | reference | null: false, foreign_key: true
| category | reference | null: false, foreign_key: true
| shipping | reference | null: false, foreign_key: true
| state | reference | null: false, foreign_key: true
| shipping | references | null: false, foreign_key: true

### Association
has_many :comments
has_many :seller, class_name:"users"
has_many :buyer, class_name:"users"
belongs_to :users
belongs_to :category
belongs_to :brand
belongs_to :shipping
belongs_to :state

stateテーブル
|Column|Type|Options|
|------|----|-------|
| name | string | null: false

### Association
has_many :item

Brandsテーブル
|Column|Type|Options|
|------|----|-------|
| brand name | string | null: false

### Association
has_many :category through: category_brands

category_brandテーブル
|Column|Type|Options|
|------|----|-------|
| categorys_id | references |null: false, foreign_key: true
| brand_id | references |null: false, foreign_key: true

### Association
belongs_to :categories
belongs_to :brands

Categorysテーブル
|Column|Type|Options|
|------|----|-------|
| name | string | null: false
| ancestry | string |

### Association
has_many :brans through: category_brands


messageテーブル
|Column|Type|Options|
|------|----|-------|
| text | text | null: false

### Association
has_many :seller, class_name:"users"
has_many :buyer, class_name:"users"


commentテーブル
|Column|Type|Options|
|------|----|-------|
| user | reference | null: false, foreign_key: true
| item | reference | null: false, foreign_key: true
| text | text | null: false

### Association
belongs_to :users
belongs_to :items

reviewテーブル
|Column|Type|Options|
|------|----|-------|
| rate | integer | null: false
| review | text | null: false

### Association
has_many :seller, class_name:"users"
has_many :buyer, class_name:"users"


shippingテーブル
|Column|Type|Options|
|------|----|-------|
| name | string | null: false
| ancestry | string |

### Association
has_many :items