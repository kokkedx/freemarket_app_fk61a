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
| nickname | string |
| password |string |
| mailadress |text |
| u-id | string |
| provider | string |

### Association


Cardテーブル
| Column | Type | Options |
|------|----|-------|
| user| references |
| 
### Association


Profileテーブル
| Column | Type | Options |
|------|----|-------|
| first name  | string |
| last name |
| first kana |
| last kana |
| phone number |
| Prefectures |
| city |
| address |
| building |
| user-id|
### Association


itemテーブル
|Column|Type|Options|
|------|----|-------|
| item name |
| price |
| brand_id |
| category |
| seller |
| buyer |


### Association


Brandテーブル
|Column|Type|Options|
|------|----|-------|
| brand name |
| item |

### Association




category_brandテーブル
|Column|Type|Options|
|------|----|-------|
| category_id |
| brand_id |

### Association

Categoryテーブル
|Column|Type|Options|
|------|----|-------|

### Association



messageテーブル
|Column|Type|Options|
|------|----|-------|
| buyer |
| seller |
| text |

### Association

commentテーブル
|Column|Type|Options|
|------|----|-------|
| user |
| item |
| text |

reviewテーブル
|Column|Type|Options|
|------|----|-------|
| rate |
| review |
| item |
| user |

### Association


shippingテーブル
|Column|Type|Options|
|------|----|-------|
