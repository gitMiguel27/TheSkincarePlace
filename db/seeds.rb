SkinType.destroy_all
Product.destroy_all

puts '🌱 Seeding Skintypes...'

# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Dry = SkinType.create({ name: 'Dry', body: 'Dry skin looks and feels rough and dull, sometimes also appearing red or flaky. If you have a dry skin type, your skin may feel tight, and you may see fine lines right after washing your face. Hydrating and protective skincare products are ideal products for this skin type, this includes gentle cleansers, hydrating serums, rich moisturizers, and face oils to fight flakiness.', image: 'https://images-1.eucerin.com/~/media/eucerin/international/about-skin/basic-skin-knowledge/skin-types-complexions/eucerin-as-skin-types-02.webp?mw=450&hash=4DC96A3DDDF305CCE0DD45CBF6B6C955' });
Oily = SkinType.create({ name: 'Oily', body: 'If your skin produces excess sebum year-round, you’re likely in the “oily” skin type group. One of the benefits of oily skin is that your skin’s natural oils protect and moisturize, naturally staving off fine lines and maintain elasticity longer. On the downside, oily skin is acne-prone, and excess oil can easily lead to breakouts. Make sure you have a good exfoliating non-comedogenic toner or serum to keep your pores clear. The ideal skin-care products for this skin type are oil-free.', image: 'https://images-1.eucerin.com/~/media/eucerin/international/about-skin/basic-skin-knowledge/skin-types-complexions/eucerin-as-skin-types-03.webp?mw=450&hash=05809D33557DEA4EF3A414E9F62F89FA' });
Combination = SkinType.create({ name: 'Combination', body: 'As the name implies, combination skin has oily and dry characteristics. For example, some people have an oily T-zone—the forehead and nose—and dryness on their cheeks; others may have dehydrated skin that’s also breakout-prone. Learning the skincare requirements for every part of your face can help you address issues most optimally. For example, if you identify that your cheeks are prone to dryness, you can address this issue by moisturizing them during your daily routine.', image: 'https://images-1.eucerin.com/~/media/eucerin/international/about-skin/basic-skin-knowledge/skin-types-complexions/eucerin-as-skin-types-04.webp?mw=450&hash=2A508DC9195F07468B4B5FE6BEF997AF' });
Normal = SkinType.create({ name: 'Normal', body: 'In the skincare market, a “normal” skin type means that your skin is balanced and doesn’t have any uncomfortable issues. Balance is generally the goal for all skin types, but even balanced skin sometimes experiences breakouts or dullness. A proper cleansing, exfoliating, and moisturizing routine will usually keep things in check.', image: 'https://images-1.eucerin.com/~/media/eucerin/international/about-skin/basic-skin-knowledge/skin-types-complexions/eucerin-as-skin-types-01.webp?mw=450&hash=AC0D5FEA28B0461B846D174CE22D41BA' });

puts '🌱 Seeding Dry Products...'
# # Product.create({ link: '', image: '', concern: '', company: '', name: '', price: , skin_type_id: })
Product.create!({ link: 'https://kravebeauty.com/collections/shop-all/products/matcha-hemp-hydrating-cleanser', image: 'https://cdn.shopify.com/s/files/1/2090/8057/products/MHHC2.0PDPCarouselProductBox_800x.jpg?v=1669126863', concern: 'Cleanser', company: 'Krave Beauty', name: 'Matcha Hemp Hydrating Cleanser', price: 16, skin_type_id: Dry.id })
Product.create!({ link: 'https://www.laroche-posay.us/our-products/face/face-wash/toleriane-hydrating-gentle-facial-cleanser-tolerianehydratinggentlefacialcleanser.html?ranEAID=jab9TuLvRmM&ranMID=43001&ranSiteID=jab9TuLvRmM-gTjMrg8_FF3NqL.PWDGgCg&siteID=jab9TuLvRmM-gTjMrg8_FF3NqL.PWDGgCg&utm_content=Beauty%20Within&utm_keyword=jab9TuLvRmM-gTjMrg8_FF3NqL.PWDGgCg&utm_medium=all_affiliate&utm_source=rakuten', image: 'https://www.laroche-posay.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-laroche-posay-master-catalog/default/dw09f10819/product/tolerianehydratinggentlefacialcleanser_badge_image.jpg?sw=930&sh=930&sm=cut&sfrm=png&q=70', concern: 'Cleanser', company: 'La Roche-Posay', name: 'Toleriane Hydrating Gentle Facial Cleanser', price: 15.99, skin_type_id: Dry.id })
Product.create!({ link: 'https://www.stylevana.com/en_US/laneige-cream-skin-refiner-4.html', image: 'https://cdn.shopify.com/s/files/1/0325/8223/8252/products/ATL0001_1200x.jpg?v=1599601206', concern: 'Toner', company: 'Laneige', name: 'Cream Skin Refiner', price: 28, skin_type_id: Dry.id })
Product.create!({ link: 'https://www.ulta.com/p/daily-moisturizing-body-face-lotion-normal-dry-skin-xlsImpprod3530071?sku=2541607&nrtv_cid=00f020eafcb40a5e9feeb814090773288fbe46dd7c8100a6f703af0cbba0b360&utm_source=narrativ&utm_medium=cpc&utm_campaign=narrativ_premium_editorial&utm_content=beautywithin&nrtv_as_src=1', image: 'https://media.ulta.com/i/ulta/2541607?w=720', concern: 'Moisturizer', company: 'CeraVe', name: 'Daily Moisturizing Lotion', price: 15.99, skin_type_id: Dry.id })
Product.create!({ link: 'https://www.glowrecipe.com/collections/plum/products/plum-plump-hyaluronic-cream?_pos=1&_sid=101347ff3&_ss=r&sscid=b1k6_ozbju', image: 'https://cdn.shopify.com/s/files/1/0543/8301/products/PLUM-MOISTURIZER-3_1200x1500_8d3d1d8a-b724-466b-8a4c-11549c84bc94copy_1080x.jpg?v=1655911167', concern: 'Moisturizer', company: 'Glow Recipe', name: 'Plum Plump Hyaluronic Cream', price: 39, skin_type_id: Dry.id })
Product.create!({ link: 'https://www.stylevana.com/en_US/deal-cosrx-aloe-soothing-sun-cream.html?nrtv_cid=e6cc474ed2f62e45d20320ba76ee8db17a1718bdc3de96f1c581e5bca3211c56&utm_source=narrativ&utm_medium=affiliate&utm_term=beautywithin&utm_campaign=beautywithin_3804692&nrtv_as_src=1', image: 'https://cdn.stylevana.com/media/catalog/product/cache/1/image/1000x1231/17f82f742ffe127f42dca9de82fb58b1/c/o/cosrx-aloe-soothing-sun-cream-425.jpg', concern: 'Sunscreen', company: 'COSRX', name: 'Aloe Soothing Sun Cream', price: 16, skin_type_id: Dry.id })

puts '🌱 Seeding Oily Products...'
Product.create!({ link: 'https://www.youthtothepeople.com/skincare/superfood-cleanser/YTTP-10100.html', image: 'https://www.youthtothepeople.com/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-yttp-master-catalog/default/dwed002e69/products/YTTP-10100/yttp_website_pdp_frontals_1x1_SuperfoodCleanser.jpg?sw=750&sh=750&sm=cut&sfrm=png&q=70', concern: 'Cleanser', company: 'Youth To The People', name: 'Superfood Cleanser', price: 36, skin_type_id: Oily.id })
Product.create!({ link: 'https://www.ulta.com/p/hydrating-facial-cleanser-with-ceramides-hyaluronic-acid-xlsImpprod4190255?sku=2541603&nrtv_cid=e9da0b16c644957aa2b9822673f06dd0aa31c1e22605e41517f025c5430a9cdb&utm_source=narrativ&utm_medium=cpc&utm_campaign=narrativ_premium_editorial&utm_content=beautywithin&nrtv_as_src=1', image: 'https://media.ulta.com/i/ulta/2541603?w=720', concern: 'Cleanser', company: 'CeraVe', name: 'Hydrating Facial Cleanser', price: 17.99, skin_type_id: Oily.id })
Product.create!({ link: 'https://en.isntree.com/Product/Detail/view/pid/31/cid/', image: 'https://en.isntree.com/storage/isskin83EN/www/prefix/product/2022/41/O/product.11.166571100993066.jpg', concern: 'Toner', company: 'Isntree', name: 'Green Tea Fresh Toner', price: 19.90, skin_type_id: Oily.id })
Product.create!({ link: 'https://www.iunikcos.com/CREAM/?idx=203', image: 'https://cdn.imweb.me/thumbnail/20220527/ffe3266bf4bf2.png', concern: 'Moisturizer', company: 'iUNIK', name: 'Centella Calming Gel Cream', price: 15.99, skin_type_id: Oily.id })
Product.create!({ link: 'https://rovectin.com/products/lotus-water-cream?variant=31948203327565', image: 'https://cdn.shopify.com/s/files/1/0269/3935/9309/products/imageoflotuswatercreamtexture_2_1200x.jpg?v=1667417083', concern: 'Moisturizer', company: 'Rovectin', name: 'Lotus Water Cream', price: 20, skin_type_id: Oily.id })
Product.create!({ link: 'https://www.iherb.com/pr/hero-cosmetics-force-shield-superlight-sunscreen-spf-30-1-69-fl-oz-50-ml/109740?nrtv_cid=44dde9bfcdf6654c779802f1181a57651e26e37c903a8ff1169a6fc7eb230296&utm_medium=affiliate&utm_source=narrativ&utm_campaign=hyram&nrtv_as_src=1', image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hro/hro46821/v/9.jpg', concern: 'Sunscreen', company: 'Hero.', name: 'Force Shield Superlight Sunscreen SPF 30', price: 19.99, skin_type_id: Oily.id })

puts '🌱 Seeding Combo Products...'
Product.create!({ link: 'https://www.revolve.com/sensibio-mild-cleansing-foaming-gel/dp/BDER-WU7/?d=Womens&nrtv_cid=4f63305a965a045be7904e0a13a15802419865ed41e423622a247f33d4193455&utm_source=narrativ&utm_medium=affiliate&utm_campaign=glob_p_beautywithin&source=bam&nrtv_as_src=1', image: 'https://is4.revolveassets.com/images/p4/n/z/BDER-WU7_V1.jpg', concern: 'Cleanser', company: 'Bioderma', name: 'Sensibio Mild Cleansing Foaming Gel', price: 17, skin_type_id: Combination.id })
Product.create!({ link: 'https://www.spacenk.com/us/skincare/cleansers/cleanser/niacinamide-cleansing-gelee-3-UK200036502.html?nrtv_cid=bbe56dc7c38d354526608ee96a9013df39f9825f47abfd1dacfe934cd0944748&utm_medium=affiliate&utm_source=narrativ&utm_campaign=hyram&utm_content=14854649&nrtv_as_src=1', image: 'https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwbd1d2b1e/products/NATURIUM/UK200036502_NATURIUM.jpg?sw=582&sh=582', concern: 'Cleanser', company: 'NATURIUM', name: 'Niacinamide Cleansing Gelee 3%', price: 24, skin_type_id: Combination.id })
Product.create!({ link: 'https://www.stylevana.com/en_US/pyunkang-yul-essence-toner.html?utm_source=google&utm_medium=cpc&sonid=36948&utm_source=google&utm_medium=cpc&utm_campaign=18136142146&utm_term=&utm_content=36948&device=c&gclid=Cj0KCQiA4OybBhCzARIsAIcfn9kMle0rcl03aZW7P2sHl2S5_TMWi7Dz4VqSrGkC_whTsPAnhRVU9zUaAtGTEALw_wcB', image: 'https://cdn.stylevana.com/media/catalog/product/cache/1/image/1000x1231/17f82f742ffe127f42dca9de82fb58b1/p/y/pyunkangyul-essence-toner-100ml-475.jpg', concern: 'Toner', company: 'Pyunkang Yul', name: 'Essence Toner', price: 17, skin_type_id: Combination.id })
Product.create!({ link: 'https://www.paulaschoice.com/skin-perfecting-2pct-bha-liquid-exfoliant/201-2010.html', image: 'https://www.paulaschoice.com/dw/image/v2/BBNX_PRD/on/demandware.static/-/Sites-pc-catalog/default/dwf0fd0988/images/products/skin-perfecting-2-percent-bha-liquid-2010-L.png?sw=360&sfrm=png', concern: 'Exfoliator', company: 'Paula’s Choice', name: 'Skin Perfecting 2% BHA Liquid Exfoliant', price: 34, skin_type_id: Combination.id })
Product.create!({ link: 'https://haruharuusa.com/collections/cream/products/black-rice-hyaluronic-cream', image: 'https://cdn.shopify.com/s/files/1/0508/9008/0408/products/cream50_1296x.jpg?v=1655083482', concern: 'Moisturizer', company: 'haruharu', name: 'Black Rice Hyaluronic Cream', price: 24, skin_type_id: Combination.id })
Product.create!({ link: 'https://www.stylevana.com/en_US/deal-beauty-of-joseon-relief-sun-rice-probiotic-spf50-pa-50ml.html?nrtv_cid=33d6f3d2c9a54ef906240422e1b6cc8ea7079233f53be9e29cf8e244c0e97cf0&utm_source=narrativ&utm_medium=affiliate&utm_term=hyram&utm_campaign=hyram_14856879&nrtv_as_src=1', image: 'https://cdn.stylevana.com/media/catalog/product/cache/1/image/1000x1231/17f82f742ffe127f42dca9de82fb58b1/b/e/beauty-of-joseon-relief-sun-rice-probiotic-50ml-318.jpg', concern: 'Sunscreen', company: 'Beauty of Joseon', name: 'Relief Sun - Rice and Probiotic SPF50+ PA++++', price: 18, skin_type_id: Combination.id })

puts '🌱 Seeding Normal Products...'
Product.create!({ link: 'https://sokoglam.com/products/then-i-met-you-soothing-tea-cleansing-gel?variant=30112631980101&currency=USD&utm_source=google&utm_medium=cpc&utm_campaign=google+shopping&utm_source=google&utm_medium=pla&utm_campaign=newengen+-+Smart+Shopping+1910&utm_term=pla-293946777986&gclid=Cj0KCQiAwP3yBRCkARIsAABGiPp4aGP8piz1Wo5dTPkr686OpRXFpzWWfNZEH7YFdbKDpsyOp1IntpIaAhOrEALw_wcB', image: 'https://cdn.shopify.com/s/files/1/0249/1218/products/11.16-Soko-Glam-PDP-Image-Then-I-Met-You-Soothing-Tea-Cleansing-Gel-Korean-Skincare-Product_860x.jpg?v=1668622964', concern: 'Cleanser', company: 'Then I Met You', name: 'Soothing Tea Cleansing Gel', price: 36, skin_type_id: Normal.id })
Product.create!({ link: 'https://www.fresh.com/us/skincare/categories/cleansers/soy-ph-balanced-hydrating-face-wash-H00006238.html', image: 'https://www.fresh.com/dw/image/v2/BDJQ_PRD/on/demandware.static/-/Sites-fresh_master_catalog/default/dw0e40fa9a/product_images/H00006238_main_pdp.jpg?sw=1350&sh=900&bgcolor=F7F7F8&sfrm=jpg', concern: 'Cleanser', company: 'fresh', name: 'Soy pH-Balanced Hydrating Face Wash', price: 38, skin_type_id: Normal.id })
Product.create!({ link: 'https://www.cvs.com/shop/aveeno-protect-hydrate-lotion-sunscreen-with-spf-30-3-oz-prodid-1016932?utm_source=narrativ', image: 'https://www.cvs.com/bizcontent/merchandising/productimages/high_res/381371151806.jpg', concern: 'Moisturizer', company: 'Aveeno', name: 'Protect + Hydrate Lotion Sunscreen with SPF 30', price: 14.49, skin_type_id: Normal.id })
Product.create!({ link: 'https://www.ulta.com/p/ultra-facial-moisturizer-spf-30-pimprod2002927?sku=2536697&nrtv_cid=7cc696df5d9dc5e255fac2cc940914f65bc2801074926affbfb3620cd3feda42&utm_source=narrativ&utm_medium=cpc&utm_campaign=narrativ_premium_editorial&utm_content=beautywithin&nrtv_as_src=1', image: 'https://media.ulta.com/i/ulta/2536697?w=720', concern: 'Sunscreen', company: 'Kiehl’s', name: 'Ultra Facial Moisturizer with SPF 30', price: 35, skin_type_id: Normal.id })



puts '🌱 Seeding Done...'