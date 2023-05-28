local licenseTable = {}
local rte = 0
local kk = 0
RegisterServerEvent('src-election:server')
AddEventHandler('src-election:server', function(data)
    local player = source
    local rockstarLicense = GetPlayerIdentifier(player, 0)

    if licenseTable[rockstarLicense] then
        TriggerClientEvent('chat:addMessage', -1, { args = { 'UYARI', 'ZATEN OY VERDIN ' }, color = 255,0,0 })
  
      
    else
      if tonumber(data) == 1 then
        rte = rte + 1 
      else
        kk = kk + 1
      end
        licenseTable[rockstarLicense] = true
        TriggerClientEvent('chat:addMessage', -1, { args = { 'UYARI', 'OY BAŞARIYLA '..data..'. sıradaki adaya verildi' }, color = 255,0,0 })

    end


end)

RegisterNetEvent('src-election:info', function ()
    TriggerClientEvent('chat:addMessage', source, { args = { 'BILGI', 'RECEP TAYYIP ERDOGAN'..' '..rte ..' oy'..' |' ..' KEMAL KILIÇDAROĞLU'..' '..kk..' '..'oy'}, color = 255,0,0 })

end)