# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
c1 = Collaborator.create( name: "Bob", role: "programmer", skills: "Unity, JavaScript, C++" )
c2 = Collaborator.create( name: "Joe", role: "animator", skills: "Unity, Maya, pixel-art" )
c3 = Collaborator.create( name: "Danesh", role: "programmer", skills: "sloppy code" )
c4 = Collaborator.create( name: "Gilfoyle", role: "programmer", skills: "clean scalable code, dry sarcastic zings" )
c5 = Collaborator.create( name: "Nobuo Uematsu", role: "composer", skills: "midi god, epic battle music" )
c6 = Collaborator.create( name: "Foley", role: "sound effects", skills: "pots and pans, those cool star wars laser sounds" )
c7 = Collaborator.create( name: "Mark Ryden", role: "2D artist", skills: "paint, creepy girls, the great emancipator, meat" )
c8 = Collaborator.create( name: "Havi", role: "game design", skills: "JavaScript, character design/animation" )

t1 = Team.create(name: "PiperChat", description: "new video-chat app using state-of-the-art compression")
t2 = Team.create(name: "Choose-Your-Own Sadventure", description: "a Psychological Thriller Point-and-Click about a ghost-girl trying to learn about her past")

TeamMember.create(team: t1, collaborator: c3 )
TeamMember.create(team: t1, collaborator: c4 )
TeamMember.create(team: t2, collaborator: c8 )
TeamMember.create(team: t2, collaborator: c5 )
TeamMember.create(team: t2, collaborator: c6 )
TeamMember.create(team: t1, collaborator: c6 )
TeamMember.create(team: t2, collaborator: c1 )