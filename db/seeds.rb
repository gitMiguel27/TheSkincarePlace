SkinType.destroy_all

puts '🌱 Seeding Skintypes...'

# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Dry = SkinType.create({ name: 'Dry', body: 'Hello from Dry body!', image: 'https://images-1.eucerin.com/~/media/eucerin/international/about-skin/basic-skin-knowledge/skin-types-complexions/eucerin-as-skin-types-02.webp?mw=450&hash=4DC96A3DDDF305CCE0DD45CBF6B6C955'});
Oily = SkinType.create({ name: 'Oily', body: 'Hello from Oily body!', image: 'https://images-1.eucerin.com/~/media/eucerin/international/about-skin/basic-skin-knowledge/skin-types-complexions/eucerin-as-skin-types-03.webp?mw=450&hash=05809D33557DEA4EF3A414E9F62F89FA'});


puts '🌱 Seeding Done...'