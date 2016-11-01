Player.delete_all()
Tournament.delete_all()

p1 = Player.create({name: "Andy Murray", ranking: 2, image: "http://www.atpworldtour.com/~/media/tennis/players/head-shot/vibrant/murray-headshot15.png"})
p2 = Player.create({name: "Novak Djokovic", ranking: 1, image:"https://s-media-cache-ak0.pinimg.com/originals/9b/89/56/9b89569e12c72959ee9cd4e0d62579d1.png"})
p3 = Player.create({name: "Rafael Nadal", ranking: 6, image:"http://www.atpworldtour.com/~/media/tennis/players/head-shot/2016/nadal_head_16.png"})
p4 = Player.create({name: "Jo-Wilfried Tsonga", ranking: 13, image:"http://www.atpworldtour.com/en/players/jo-wilfried-tsonga/t786/www.atpworldtour.com/~/media/tennis/players/head-shot/2016/tsonga_head_16.png"})

t1 = Tournament.create({name: "Wimbledon", winner: p1.id, runnerup: p4.id, lat: 51.432185, lng: -0.215258, location: "All England Lawn Tennis Club"})
t2 = Tournament.create({name: "French Open", winner: p2.id, runnerup: p1.id, lat: 48.847344, lng: 2.250917, location: "Roland-Garros"})