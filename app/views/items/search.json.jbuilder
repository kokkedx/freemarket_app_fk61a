json.array! @m_cat do |m_cat|
  json.id m_cat.id
  json.name m_cat.name
end

json.array! @s_cat do |s_cat|
  json.id   s_cat.id
  json.name s_cat.name
end

json.array! @deliver do |deliver|
  json.id   deliver.id
  json.method deliver.method
end