import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side-bg-base-100 bg-gray-700">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
          <div>
            <h2 className="card-title text-white">{login}</h2>
            <Link className="text-base-content" to={`/user/${login}`}>
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
