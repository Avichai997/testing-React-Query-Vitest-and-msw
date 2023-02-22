import type { IUser } from '@/services/hooks/useUsers.test/IUser'

type UserCardProps = {
  user: IUser
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
      }}
    >
      <img
        src={user.avatar_url}
        style={{ width: '50px', height: '50px', borderRadius: '9999px' }}
      />

      <p>{user.login}</p>
    </div>
  )
}
