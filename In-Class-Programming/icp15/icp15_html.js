const html = {
  top: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>icp15</title></head><body>`,
  bottom: `</body></html>`,
  login: `<form action="/login" method="post">
            <input type="text" id="user" name="user" placeholder="Type your username" required><br><br>
            <input type="password" id="password" name="password" placeholder="Type your password" required><br><br>
            <button type="submit">Submit</button>
          </form>`,
  admin: `<h1>Admin Page</h1>
            <p>You are loggedIn</p>
            <hr>
          <a href="/logout">Logout</a>`,
  loggedOut: `<h1>Logged Out</h1>
              <p>You are loggedOut</p>
              <hr>
              <a href="/">Login again</a>`,
};

module.exports = html;
