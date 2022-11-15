HUGO_ENV=production hugo
rsync -avzh public matt@zerotoasiccourse.com:/home/matt/tinytapeout
