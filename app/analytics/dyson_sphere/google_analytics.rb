module DysonSphere
  class Analytics::GoogleAnalytics
    class_attribute :backend
    self.backend = AnalyticsRuby

    def initialize(user)
      @user = user
    end

    def track_random_event
      event = { user_id: user.id }
      track event
    end

    private

    def identify
      backend.identify(identify_params)
    end

    def identify_params
      {
        user_id: user.id,
      }
    end

    def track(options)
      identify
      add_client_information if client_id.present?
      backend.track(options)
    end

    attr_reader :user

    def add_client_information(options)
      options.merge! context: client_information_hash
    end

    def client_information_hash
      {
        'Google Analytics' => {
          clientId: client_id
        }
      }
    end

    def client_id
      ENV['GOOGLE_ANALYTICS_TOKEN']
    end
  end
end
