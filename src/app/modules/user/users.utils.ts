import { User } from './user.model'

const findLastUserId = async () => {
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createAt: -1,
    })
    .lean()
  return lastUserId?.id
}
export const generateId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementalId
}
