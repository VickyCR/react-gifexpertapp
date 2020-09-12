import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('useFetchGifs', () => {
  test('should return initial value', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should retrieve an images array and a loading', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
