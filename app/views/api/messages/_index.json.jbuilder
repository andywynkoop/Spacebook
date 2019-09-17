messages.each do |message|
  json.partial! '/api/messages/message.json', message: message
end