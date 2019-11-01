import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method='post'>
      <div>
        <label>Email</label>
          <input name='email' />
      </div>
      <div>
        <label>Password</label>
          <input name='password' type='password' />
      </div>
      <button>Login</button>
    </form>

  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Email and Password were not valid');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout:>Logout</a>
      </div>
    `)
  }
})

export { router };
