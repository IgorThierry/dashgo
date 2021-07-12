import { useQuery } from 'react-query';
import { api } from '../../api';

export function useUsers() {
  return useQuery(
    'users',
    async () => {
      const { data } = await api.get('/users');

      const users = data.users.map(user => {
        return {
          ...user,
          createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        };
      });

      return users;
    },
    {
      staleTime: 1000 * 5, // 5s
    },
  );
}
