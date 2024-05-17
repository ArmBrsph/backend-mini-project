const Model = require('./Model');
const _ = require('lodash');
const databaseMock = [
    { id: 1, product_name: 'DecaWear Collection', price: 1000, product_image: 'P001.webp', description: "Crafted with premium materials and attention to detail, each garment in the DecaWear Collection exudes sophistication and timeless elegance. From sleek silhouettes to vibrant prints, our pieces are tailored to flatter every body type and inspire confidence with every wear." },
    { id: 2, product_name: 'Perfect Ten Ensemble', price: 2500, product_image: 'P002.webp', description: "Inspired by the spirit of adventure and exploration, DecaWear celebrates individuality and empowers you to express your unique sense of style. Whether you're making a statement in the boardroom or embracing laid-back luxury on the weekend, our pieces are designed to seamlessly transition with you throughout your day" },
    { id: 3, product_name: 'DecaStyle Kit', price: 1099, product_image: 'P003.webp', description: "Crafted with care and attention to detail, each piece in the DecaStyle Kit is a testament to modern design and timeless appeal. From sleek silhouettes to statement prints, our collection offers a diverse range of options to suit every mood and occasion." },
    { id: 4, product_name: 'TenFold Fashion Set', price: 3099, product_image: 'P004.webp', description: "Crafted with meticulous attention to detail and quality craftsmanship, each garment in the TenFold Fashion Set exudes timeless elegance and modern sophistication. From classic silhouettes to contemporary designs, this collection offers a diverse range of options to suit every occasion and mood." },
    { id: 5, product_name: 'Wardrobe Decade', price: 2000, product_image: 'P005.webp', description: "Crafted with precision and passion, each garment in the Wardrobe Decade collection is a testament to the enduring allure of fashion. From sleek silhouettes to statement prints, our pieces are thoughtfully designed to complement your individuality and elevate your wardrobe to new heights." },
    { id: 6, product_name: 'DecaChic Closet', price: 999, product_image: 'P006.webp', description: "Inspired by the dynamic spirit of today's fashion landscape, the DecaChic Closet empowers you to express your unique sense of style with confidence and grace. Whether you're making a statement at a special event or adding a touch of sophistication to your everyday look, our versatile pieces seamlessly transition from day to night with effortless elegance." },
    { id: 7, product_name: 'DecaThreads Assortment', price: 1800, product_image: 'P007.webp', description: "Crafted with precision and passion, each garment in the DecaThreads Assortment embodies the essence of contemporary fashion. From timeless classics to trendsetting designs, our assortment offers a diverse range of options to suit every taste and occasion" },
    { id: 8, product_name: 'DecaFashion Capsule', price: 1500, product_image: 'P008.webp', description: "DecaFashion Capsule: Where sophistication meets versatility. Each piece exudes timeless elegance and modern flair. From luxurious fabrics to flattering cuts, this collection effortlessly elevates your style. Whether it's a glamorous soirée or a casual outing, DecaFashion Capsule ensures you make a statement with confidence and grace." },
    { id: 9, product_name: 'DecaTrend Ensemble', price: 1200, product_image: 'P009.webp', description: "Introducing DecaTrend Ensemble: Where innovation meets style. This cutting-edge collection redefines fashion with its bold designs and contemporary twists. From runway-inspired looks to everyday essentials, each piece embodies the latest trends while ensuring comfort and versatility. Elevate your wardrobe with DecaTrend Ensemble and make a statement wherever you go." },
    { id: 10, product_name: 'DecaGlam Kit', price: 4000, product_image: 'P010.webp', description: "Introducing the DecaGlam Kit: Your ultimate passport to glamour. This curated collection is a fusion of luxury and style, designed to enhance your natural beauty and elevate your look. From shimmering eyeshadows to velvety lipsticks, each product promises sophistication and allure. Unveil your inner star with the DecaGlam Kit." },
    { id: 11, product_name: 'DecaGlam Kit', price: 4000, product_image: 'P010.webp', description: "Introducing the DecaGlam Kit: Your ultimate passport to glamour. This curated collection is a fusion of luxury and style, designed to enhance your natural beauty and elevate your look. From shimmering eyeshadows to velvety lipsticks, each product promises sophistication and allure. Unveil your inner star with the DecaGlam Kit." },
    { id: 12, product_name: 'DecaTrend Ensemble', price: 1200, product_image: 'P009.webp', description: "Introducing DecaTrend Ensemble: Where innovation meets style. This cutting-edge collection redefines fashion with its bold designs and contemporary twists. From runway-inspired looks to everyday essentials, each piece embodies the latest trends while ensuring comfort and versatility. Elevate your wardrobe with DecaTrend Ensemble and make a statement wherever you go." },
]

class Controller {
    getAllProduct(req, res) {
        try {
            const data = databaseMock.map(e => {
                return {
                    id: e.id,
                    product_name: e.product_name,
                    price: e.price,
                    product_image: e.product_image,
                }
            })
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }
    getDetailProduct(req, res) {
        try {
            const { id } = req.query
            const data = databaseMock.filter(fl => fl.id === Number(id))
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    }
    getBillProduct(req, res) {
        try {
            const { id } = req.body
            let cart = id.map(el => {
                const item = databaseMock.find(fl => fl.id === el)
                return item
            })
            const respon = _.sumBy(cart, 'price')
            res.json(respon)
        } catch (error) {
            res.json(error)
        }

    }
}

module.exports = new Controller()