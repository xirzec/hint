import * as request from 'request';

export default (options: string | request.Options): Promise<any> => {
    return new Promise((resolve, reject) => {
        // `as any` because typescript complains about the type of options.
        request(options as any, (error, res, body) => {
            if (error) {
                return reject(error);
            }

            return resolve(body);
        });
    });
};
