module.exports = {
    '/' : (req, res)=>{
        res.send('default URL');
    },
    '/other': (req,res)=>{
        res.send('Other URL!');
    },
    '/another' : (req,res)=>{
        res.send('hey there sailor');
    }
};