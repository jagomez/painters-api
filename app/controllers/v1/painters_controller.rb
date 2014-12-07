class V1::PaintersController < ApplicationController
	respond_to :xml, :json, :html
	# before_action :restrict_access

	def index
  		@painters = Painter.all
  		
	end
	def show
		@painter = Painter.find_by(painter_params)
		
	end
	def create
		@painter = Painter.create(painter_params)
		respond_with(@painter)

	end

	def destroy
		@painter = Painter.find_by(:id => params[:id])
		@painter.destroy
    	respond_with(@painter)
	end

	def update
		@painter = Painter.find_by(:id => params[:id])
		@painter.update(painter_params)
		respond_with(@painter)
	end

	private

	def painter_params
		return params.require(:painter).permit(:first_name, :last_name, :country)
	end
	def restrict_access
		authenticate_or_request_with_http_token do |api_key, options|
		User.find_by(email: request.headers["X-User-Email"], api_key: api_key)
	end
end
end