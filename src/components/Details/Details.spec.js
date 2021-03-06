/* eslint-disable testing-library/no-unnecessary-act */
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Details } from './Details';
import { getDetails } from '../../services/apiRequest';

const detailObj = {
    data: {
        id: '1',
        urls: {
            small: 'Fake photo',
        },
        user: {
            name: 'heber',
            last_name: 'bar',
            portfolio_url: 'test url',
            twitter_username: 'twitter',
            bio: 'bio',

            profile_image: {
                small: 'Small',
            },
            first_name: 'Heber',
            username: 'hebeready',
        },
        exif: {
            name: 'max',
            exposure_time: '100',
            aperture: 'open',
            focal_length: '23',
            iso: '100',
        },
        views: '123',
        downloads: '1234',
        likes: '12',
        created_at: 'london',
        location: {
            city: 'madrid',
        },
        tags_preview: [{ title: 'Hello' }],
    },
};

jest.mock('../../services/apiRequest');

describe('first', () => {
    beforeEach(() => {
        getDetails.mockResolvedValue(detailObj);
    });
    test('should first history={history}', async () => {
        await act(async () =>
            render(
                <MemoryRouter initialEntries={['/detail/id=1']}>
                    <Routes location={{ pathname: '/detail/id=1' }}>
                        <Route path="/detail/:id" element={<Details />} />
                    </Routes>
                </MemoryRouter>
            )
        );
        expect(screen.getByText(/Details/i)).toBeDefined();
        expect(screen.getByText(/Hello/i)).toBeDefined();
    });
});
