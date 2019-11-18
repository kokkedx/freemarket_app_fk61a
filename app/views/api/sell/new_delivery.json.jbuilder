json.array! @ship_deliveries do |shipDelivery|
  json.id      shipDelivery.id
  json.name    shipDelivery.name
  json.charge  shipDelivery.charge
end
