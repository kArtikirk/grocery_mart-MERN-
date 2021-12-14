class ApiFeatures {
    constructor(query,querystr){
        this.query = query;
        this.querystr = querystr;
    }

    search(){
        const keyword = this.querystr.keyword ? {
            name:{
                $regex:this.querystr.keyword,
                $options: "i",
            },
        }:{};

        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.querystr}
        //removing some fields for categories
        const removefields = ["keyword"];
        removefields.forEach(key=>delete queryCopy[key]);

        this.query = this.query.find(queryCopy);
        return this;
    }
};


module.exports = ApiFeatures