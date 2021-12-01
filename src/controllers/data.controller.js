const { default: axios } = require("axios");
const Data = require("../models/data.model");

const fetchRSSFeedsFromAPI = async (keyword) => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return result;
}

module.exports = {

    async getRSSFeeds(req, res) {
        try {
            let keyword = req.params.search;

            let dbResult = await Data.findOne({keyword : keyword});

            if(dbResult) {
                return res.status(200).json({ data : dbResult });
            }

            let result = fetchRSSFeedsFromAPI(keyword);

            let newData = new Data({
                keyword : keyword,
                data : result
            });

            await newData.save();

            return res.status(200).json({ data : result });
        } catch (error) {
            console.log('error ------', error);
            return res.status(500).json({
                error : 'An error occured!'
            })
        }
    }
}