import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import "./FeedCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { PostAction, AuthAction } from "../../redux/actions/Index";
import { Edit } from "@material-ui/icons";
const MePostCardView = ({ setOpen, setEmployee }) => {
  const dispatch = useDispatch();
  const [deletePopup, setDeletePopup] = useState(false);
  const [postId, setPostId] = useState();
  const [like, setLike] = useState(true);
  // const profileImage =
  const { userData } = useSelector((state) => state.AuthReducer);
  const { post } = useSelector((state) => state.PostReducer);

  useEffect(() => {
    (async () => {
      const response = await dispatch(PostAction.getAllEmployees());
    })();
  }, []);

  const handleDelete = (email) => {
    const delUser = dispatch(PostAction.deleteEmployee({ email: email }));
  };

  const handleUpdate = (data) => {
    setOpen(true);
    setEmployee(data);
  };

  return (
    <section>
      <ul className="update_list">
        {
          // props &&
          // props.data &&
          post?.map((data) => {
            return (
              <li>
                <div className="share-update-card">
                  <div className="share-update-card__header">
                    <img
                      style={{ backgroundColor: "black" }}
                      className="feedcard "
                      src="https://source.unsplash.com/user/erondu/40x40"
                    ></img>
                    <div className="share-update-card__actor-info">
                      <h3 className="share-update-card__actor-text">
                        {data.email}
                      </h3>
                    </div>
                    <div className="caption">
                      <p>
                        {data.firstName} {data.lastName}
                      </p>
                    </div>
                    <div className="caption">
                      <p>{data.mobile}</p>
                    </div>
                  </div>

                  <div className="imgSocial">
                    <div className="social-action-bar">
                      <button
                        className="social-action-bar__button"
                        onClick={() => handleDelete(data.email)}
                      >
                        <DeleteOutlineOutlinedIcon color="red" />
                        DELETE
                      </button>

                      {/* <div class="line"></div> */}
                      <button
                        className="social-action-bar__button"
                        onClick={() => {
                          handleUpdate(data);
                        }}
                      >
                        <Edit />
                        <span>UPDATE</span>{" "}
                      </button>
                      {/* <div class="line"></div> */}
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        }
        {post.length == 0 && (
          <h1 className="text-center">No employee to show</h1>
        )}
      </ul>
    </section>
  );
};
export default MePostCardView;
