const UserObject = require('./models/UserSchema');
const router = express.Router();

router.get('/users', async (req, res) => {
    try{
        const users = await UserObject.find(); 
      	//FindById, FindOne(x => x.name == 'name'), ...
        res.status(200).json(users);
    }
    catch(error)
    {
        res.status(500).json({message:error})
    }
});

router.post('/users', async (req, res) => {
    try{
        const users = await UserObject.create({
            name: "Julien",
            password: "test"
        });
      	//FindById, FindOne(x => x.name == 'name'), ...
        res.status(200).json(users);
    }
    catch(error)
    {
        res.status(500).json({message:error})
    }
});