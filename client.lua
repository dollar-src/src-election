Command = 'oyver'
OydurumuCommand = 'oydurumu'
RegisterCommand(Command, function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'showui',


    })
end)


RegisterCommand(OydurumuCommand, function()
TriggerServerEvent('src-election:info')
end)


RegisterNuiCallback('src-election', function (data)
    TriggerServerEvent('src-election:server', data)
end)



RegisterNUICallback('CloseMenu:NuiCallback', function(data)
    SetNuiFocus(false, false)
end)
