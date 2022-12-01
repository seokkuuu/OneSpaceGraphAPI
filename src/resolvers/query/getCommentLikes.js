import CommentModel from "../../models/comment";
import GetContextUser from "../../utils/getContextUser";

export default async function GetCommentLikesController(root, args, context) {
  GetContextUser(context);

  const { _id } = args;

  const comment = await CommentModel.findById(_id);

  return comment.likes;
}
