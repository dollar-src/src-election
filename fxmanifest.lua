fx_version 'cerulean'
game 'gta5'

version '1.0.0'

shared_script 'config.lua'

client_scripts {
    'client.lua'
}

server_scripts {
    'server.lua'
} 

ui_page {
	'html/index.html',
}

lua54 'yes'

files {
	"html/css/*.ttf",
	'html/css/*.css',
	'html/js/*.js',
	'html/index.html',
	"html/fontawesome/css/*.css",
	'html/img/index.html',
    'html/img/*.jpeg',
    'html/img/*.png',
    'html/img/*.mp3'
}
