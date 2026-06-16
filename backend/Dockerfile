FROM ruby:3.4

RUN apt-get update -qq && \
    apt-get install -y build-essential sqlite3 libsqlite3-dev

WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install

CMD ["bash"]